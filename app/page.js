"use client";
import React, { useState, useEffect } from "react";
import ApplyPreQualification from "@/components/Bidder/ApplyPreQualification";
import { Button } from "@mui/material";

const App = () => (
  <div>
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to Tender dApp</h1>
      <p className="mt-4">Choose your role to proceed.</p>
      <div class="flex justify-center mt-4">
        <div class="mr-2">
          <Button variant="outlined" href="/client">
            Client
          </Button>
        </div>
        <div class="ml-2">
          <Button variant="outlined" href="/bidder">
            Bidder
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default App;
