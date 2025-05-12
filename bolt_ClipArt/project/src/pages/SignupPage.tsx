import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import SignupForm from '../components/Auth/SignupForm';

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;