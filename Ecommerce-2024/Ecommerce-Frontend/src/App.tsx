import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));
const Orders = lazy(() => import("./pages/orders"));

const Dashboard = lazy(() => import("./pages/pages/admin/dashboard"));
const Products = lazy(() => import("./pages/pages/admin/products"));
const Customers = lazy(() => import("./pages/pages/admin/customers"));
const Transaction = lazy(() => import("./pages/pages/admin/transaction"));
const Barcharts = lazy(() => import("./pages/pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/pages/admin/apps/toss"));
const NewProduct = lazy(() => import("./pages/pages/admin/management/newproduct"));
const ProductManagement = lazy(() => import("./pages/pages/admin/management/productmanagement"));
const TransactionManagement = lazy(() => import("./pages/pages/admin/management/transactionmanagement"));
const Header = lazy(() => import("./components/header"))
const App = () => {
  return (
    <Router>

      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/admin/dashboard" element={<Dashboard />} /> Define the admin route

          {/* Protected Route */}
          <Route
          // path="/admin/*"
          // element={
          //   <ProtectedRoute isAuthenticated={true} adminRoute={true} isAdmin={true} />
          // }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<Products />} />
            <Route path="customer" element={<Customers />} />
            <Route path="transaction" element={<Transaction />} />
            {/* Charts */}
            <Route path="chart/bar" element={<Barcharts />} />
            <Route path="chart/pie" element={<Piecharts />} />
            <Route path="chart/line" element={<Linecharts />} />
            {/* Apps */}
            <Route path="app/coupon" element={<Coupon />} />
            <Route path="app/stopwatch" element={<Stopwatch />} />
            <Route path="app/toss" element={<Toss />} />

            {/* Management */}
            <Route path="product/new" element={<NewProduct />} />
            <Route path="product/:id" element={<ProductManagement />} />
            <Route path="transaction/:id" element={<TransactionManagement />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
