import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { auth, loginWithGoogle } from "../firebase/firebase";

export default function Admin() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completing, setCompleting] = useState(""); // order id being completed
  const [error, setError] = useState("");
  const [notAuthorized, setNotAuthorized] = useState(false); // non-admin flag

  // Track login state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      setError("");
      setNotAuthorized(false);
    } catch (err) {
      console.error(err);
      setError("Login failed");
    }
  };

  // Fetch orders (only if logged in)
  const fetchOrders = async () => {
    if (!user) return;
    setLoading(true);

    try {
      const token = await user.getIdToken();
      const res = await axios.get("http://localhost:5000/api/admin/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setOrders(res.data);
      setNotAuthorized(false); // admin verified
    } catch (err) {
      console.error(err);
      if (err.response?.status === 403) {
        setNotAuthorized(true);
        toast.error("You are not authorized to view this page");
      } else {
        setError(
          err.response?.data?.error || "Failed to fetch orders (check admin)"
        );
        toast.error(err.response?.data?.error || "Failed to fetch orders");
      }
    } finally {
      setLoading(false);
    }
  };

  // Mark order as completed
  const handleComplete = async (orderId) => {
    if (!user) return;

    setCompleting(orderId);
    try {
      const token = await user.getIdToken();
      await axios.post(
        `http://localhost:5000/api/admin/orders/${orderId}/complete`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrders((prev) => prev.filter((o) => o.id !== orderId));
      toast.success("Order marked as completed!");
    } catch (err) {
      console.error(err);
      if (err.response?.status === 403) {
        setNotAuthorized(true);
        toast.error("You are not authorized to perform this action");
      } else {
        toast.error(
          err.response?.data?.error || "Failed to mark order as completed"
        );
      }
    } finally {
      setCompleting("");
    }
  };

  // Auto-fetch orders when logged in
  useEffect(() => {
    if (user) fetchOrders();
  }, [user]);

  // --- Render ---

  if (!user) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-xl mb-4">Admin Login</h2>
        <button
          onClick={handleLogin}
          className=" px-4 py-2 rounded-lg add-to-cart-btn gap-4 flex items-center"
        >
          <i className="fa-brands fa-google"></i>
          Login with Google
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    );
  }

  if (notAuthorized) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Not Authorized</h2>
        <p className="text-center max-w-md">
          Your account does not have permission to view this page. Please
          contact the site administrator if you believe this is an error.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Full Page Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="flex flex-col items-center gap-4">
            <Loader color="hsl(25 35% 43%)" size={15} loading={true} />
            <span
              className="text-lg font-semibold"
              style={{ color: "hsl(25 35% 43%)" }}
            >
              Fetching orders...
            </span>
          </div>
        </div>
      )}

      <div className="min-h-screen text-foreground py-12 px-4 sm:px-8 flex flex-col items-center">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-cafe-warm-accent mb-10 text-center drop-shadow-lg">
            Admin Orders
          </h1>
          <div className="flex justify-center mb-8">
            <button
              className="add-to-cart-btn font-semibold"
              onClick={fetchOrders}
            >
              Fetch New Orders
            </button>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {orders.length === 0 && !loading ? (
            <div className="bg-cafe-dark/80 rounded-xl p-8 text-center shadow-lg">
              <p className="text-lg text-cafe-warm-accent/80">No orders yet</p>
            </div>
          ) : (
            <div
              className="space-y-8"
              style={{ backgroundColor: "rgba(95, 67, 53, 0.7)" }}
            >
              {orders.map((order, idx) => (
                <div
                  key={order.id || idx}
                  className="bg-cafe-dark/80 border border-cafe-warm-accent/30 rounded-2xl shadow-xl p-6 hover:scale-[1.01] transition-transform duration-200"
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-heading text-xl font-bold text-cafe-warm-accent">
                      Order #{idx + 1}
                    </p>
                    <span className="text-sm text-cafe-warm-accent/70">
                      Placed: {new Date(order.createdAt).toLocaleString()}
                    </span>
                  </div>

                  {/* Customer Info */}
                  <div className="mb-4 flex flex-col gap-1 bg-background/60 rounded-lg px-4 py-3">
                    <span className="font-semibold text-cafe-warm-accent text-base">
                      Name:{" "}
                      <span className="text-foreground/90">
                        {order.name || "-"}
                      </span>
                    </span>
                    <span className="font-semibold text-cafe-warm-accent text-base">
                      Phone:{" "}
                      <span className="text-foreground/90">
                        {order.phone || "-"}
                      </span>
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {order.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between bg-background/60 rounded-lg px-4 py-2 gap-2"
                      >
                        <div className="flex flex-col min-w-[160px] max-w-[160px]">
                          <span className="font-semibold text-lg leading-tight truncate whitespace-nowrap text-cafe-warm-accent">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-foreground/80">
                          × {item.quantity}
                        </span>
                        <span className="font-bold text-accent min-w-[80px] text-right">
                          ₹{item.price * item.quantity}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-lg font-bold text-cafe-warm-accent bg-background/80 px-6 py-2 rounded-xl shadow">
                      Total: ₹
                      {order.items.reduce(
                        (sum, it) => sum + it.price * it.quantity,
                        0
                      )}
                    </span>

                    <button
                      className="add-to-cart-btn py-2 px-6 rounded-lg font-semibold text-lg flex items-center justify-center"
                      disabled={!!completing}
                      onClick={() => handleComplete(order.id)}
                    >
                      {completing === order.id ? (
                        <span
                          className="loader-storybook mr-2"
                          style={{ width: 24, height: 24 }}
                        ></span>
                      ) : null}
                      Mark as completed
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
