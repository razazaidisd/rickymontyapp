import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import CharacterList from './List';

afterEach(() => {
  cleanup();
});

const mockData = [
    {
        'id': 41,
        'name': 'Big Boobed Waitress',
        'image': 'https://rickandmortyapi.com/api/character/avatar/41.jpeg',
        'species': 'Mythological Creature',
        'status': 'Alive',
        'type': '',
        'gender': 'Female'
    },
    {
        'id': 42,
        'name': 'Big Head Morty',
        'image': 'https://rickandmortyapi.com/api/character/avatar/42.jpeg',
        'species': 'Human',
        'status': 'unknown',
        'type': 'Human with giant head',
        'gender': 'Male'
    },
    {
        'id': 43,
        'name': 'Big Morty',
        'image': 'https://rickandmortyapi.com/api/character/avatar/43.jpeg',
        'species': 'Human',
        'status': 'Dead',
        'type': '',
        'gender': 'Male'
    },
    {
        'id': 44,
        'name': 'Body Guard Morty',
        'image': 'https://rickandmortyapi.com/api/character/avatar/44.jpeg',
        'species': 'Human',
        'status': 'Dead',
        'type': '',
        'gender': 'Male'
    },
    {
        'id': 45,
        'name': 'Bill',
        'image': 'https://rickandmortyapi.com/api/character/avatar/45.jpeg',
        'species': 'Human',
        'status': 'Alive',
        'type': '',
        'gender': 'Male'
    },
    {
        'id': 46,
        'name': 'Bill',
        'image': 'https://rickandmortyapi.com/api/character/avatar/46.jpeg',
        'species': 'Animal',
        'status': 'unknown',
        'type': 'Dog',
        'gender': 'Male'
    },
    {
        'id': 47,
        'name': 'Birdperson',
        'image': 'https://rickandmortyapi.com/api/character/avatar/47.jpeg',
        'species': 'Alien',
        'status': 'Alive',
        'type': 'Bird-Person',
        'gender': 'Male'
    },
    {
        'id': 48,
        'name': 'Black Rick',
        'image': 'https://rickandmortyapi.com/api/character/avatar/48.jpeg',
        'species': 'Human',
        'status': 'Alive',
        'type': '',
        'gender': 'Male'
    },
    {
        'id': 49,
        'name': 'Blamph',
        'image': 'https://rickandmortyapi.com/api/character/avatar/49.jpeg',
        'species': 'Alien',
        'status': 'Alive',
        'type': '',
        'gender': 'unknown'
    },
    {
        'id': 50,
        'name': 'Blim Blam',
        'image': 'https://rickandmortyapi.com/api/character/avatar/50.jpeg',
        'species': 'Alien',
        'status': 'Alive',
        'type': 'Korblock',
        'gender': 'Male'
    },
    {
        'id': 51,
        'name': 'Blue Diplomat',
        'image': 'https://rickandmortyapi.com/api/character/avatar/51.jpeg',
        'species': 'Alien',
        'status': 'Alive',
        'type': '',
        'gender': 'Male'
    },
    {
        'id': 52,
        'name': 'Blue Footprint Guy',
        'image': 'https://rickandmortyapi.com/api/character/avatar/52.jpeg',
        'species': 'Human',
        'status': 'Dead',
        'type': '',
        'gender': 'Male'
    },
    {
        'id': 53,
        'name': 'Blue Shirt Morty',
        'image': 'https://rickandmortyapi.com/api/character/avatar/53.jpeg',
        'species': 'Human',
        'status': 'unknown',
        'type': '',
        'gender': 'Male'
    },
    {
        'id': 54,
        'name': 'Bobby Moynihan',
        'image': 'https://rickandmortyapi.com/api/character/avatar/54.jpeg',
        'species': 'Human',
        'status': 'Alive',
        'type': '',
        'gender': 'Male'
    },
    {
        'id': 55,
        'name': 'Boobloosian',
        'image': 'https://rickandmortyapi.com/api/character/avatar/55.jpeg',
        'species': 'Alien',
        'status': 'Dead',
        'type': 'Boobloosian',
        'gender': 'unknown'
    }
];


it('Should render list of 15 characters', () => {
  render(<CharacterList characterData={mockData} />);
  const list = screen.getAllByTestId("character");
  
  expect(list.length).toBe(mockData.length)
});
