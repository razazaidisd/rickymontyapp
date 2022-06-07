
import React from "react";
import { render, screen } from '@testing-library/react';

import CharacterCard from "./Card";

let container : any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container = null;
});

const mockData = {
    id: 1,
    name: 'Bill - Test Character',
    image: '',
    species: 'Animal',
    status: 'unknown',
    type: 'Dog',
    gender: 'Male',
};


it("renders Character details with image", () => {
    render(<CharacterCard {...mockData}/>, container);
    const linkElement = screen.getByText(/Bill/i);
    expect(linkElement).toBeInTheDocument();

});
