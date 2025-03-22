
import Home from "./components/Home";
import About from "./components/About";
import Accommodations from "./components/Accommodations";
import Contact from "./components/Contact";
import Login from "./components/Login";
import LandlordSignUp from "./components/LandlordSignUp";
import UserSignUp from "./components/UserSignUp";
import Landlords from "./components/Landlords";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Continue from "./components/Continue";
import ViewAccomodation from "./components/ViewAccomodation";
import ManageListing from "./components/ManageListing";
import PropertyCard from "./components/PropertyCard";
import EditPropertyModal from "./components/EditPropertyModal";
import AddListing from "./components/AddListing";
import Subscription from "./components/Subscription";
import Tenants from "./components/Tenants"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./components/Payment";
import PaymentHistory from "./components/PaymentHistory"
import LandlordProfile from "./components/LandlordProfile";
import EditProfile from "./components/EditProfile";
import TenantProfile from "./components/TenantProfile";
import EditProfile2 from "./components/EditProfile2"

function App() {
  return (
    <>
      <Router>
        

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/accommodations" element={<Accommodations />}></Route>
          <Route path="/landlords" element={<Landlords />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/usersignup" element={<UserSignUp />}></Route>
          <Route path="/landlordsignup" element={<LandlordSignUp />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forget-password" element={<ForgotPassword />}></Route>
          <Route path="/continue" element={<Continue />}></Route>
          <Route
            path="/view-accommodations"
            element={<ViewAccomodation />}
          ></Route>
          <Route path="/manage-listing" element={<ManageListing/>}></Route>
          <Route path="/property-card" element={<PropertyCard/>}></Route>
          <Route path="/edit" element={<EditPropertyModal/>}></Route>
          <Route path="/add-listing" element={<AddListing/>}></Route>
          <Route path="/subscription" element={<Subscription/>}></Route
          <Route path="/tenants" element={<Tenants/>}></Route>
          <Route path="/payment" element={<Payment/>}></Route>
          <Route path="/payment-history" element={<PaymentHistory/>}></Route>
          <Route path="/landlord-profile" element={<LandlordProfile/>}></Route>
          <Route path ="/edit-profile" element={<EditProfile/>}></Route>
          <Route path="tenant-profile" element={<TenantProfile/>}></Route>
          <Route path ="/edit-profile2" element={<EditProfile2/>}></Route>




        </Routes>
      </Router>
    </>
  );
}

export default App;
