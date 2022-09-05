import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
  return (
    <div style={{ height: '1000px' }}>
      <div className="container mx-auto">
        <h1 className="text-white text-8xl mb-2">superplate</h1>
        <p className="text-lg text-white mb-3">
          The frontend boilerplate with superpowers!
        </p>
        <Button type="button">
          <a href="/Welcome" >
            Docs
          </a>
        </Button>
      </div>
    </div>
  );
};
