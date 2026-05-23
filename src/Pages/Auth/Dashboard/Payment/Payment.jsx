import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Wrench } from "lucide-react";

const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // We still catch the state just in case you want to display what they WERE going to pay for
    const { price, type } = location.state || { price: 0, type: 'feature' };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl border-t-4 border-warning text-center p-8">
                
                <div className="flex justify-center mb-6">
                    {/* The animate-bounce adds a nice little construction animation */}
                    <Wrench className="w-20 h-20 text-warning animate-bounce" />
                </div>

                <h2 className="text-3xl font-bold mb-4">Under Construction</h2>
                
                <p className="text-base-content/70 mb-2">
                    We are currently upgrading our payment gateway. The <span className="font-bold text-primary capitalize">{type}</span> payment of <span className="font-bold">{price} Tk</span> is temporarily disabled.
                </p>
                <p className="text-base-content/70 mb-8">
                    Please check back later!
                </p>

                <div className="card-actions justify-center w-full">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="btn btn-primary w-full"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;