"use client";

import React from "react";
import ApplyPreQualification from "../../components/Bidder/ApplyPreQualification";
import SubmitBid from "../../components/Bidder/SubmitBid";

const BidderDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Bidder Dashboard</h2>
      <ApplyPreQualification />
      <SubmitBid />
    </div>
  );
};

export default BidderDashboard;
