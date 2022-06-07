import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, cleanup } from '@testing-library/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { LOAD_CHARACTERS } from './GraphQL/Queries';
// import TestRenderer from 'react-test-renderer';
import App from './App';

afterEach(cleanup);


const mocks : any = [
  {
    request: {
      query: LOAD_CHARACTERS,
    },
    results: {
      data: [
        {
          id: 1,
          name: 'Bill - Test Character',
          image: '',
          species: 'Animal',
          status: 'unknown',
          type: 'Dog',
          gender: 'Male',
        }
      ]
    }
  }
]; 

it("Should renders the applicaiton", async () => {
  const client = new ApolloClient({
    cache: new InMemoryCache()
  });

  render(
    <MockedProvider mocks={mocks} >
      <App />
    </MockedProvider>
  );

  await screen.findByText(/loading/i);
});
