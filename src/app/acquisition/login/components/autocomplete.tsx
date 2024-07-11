import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationAutoSuggest = (props:any) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (props.query.length > 2) {
            const fetchSuggestions = async () => {
                try {
                    const fetchSuggestions = async () => {
                        try {
                            const response = await axios(
                                {
                                    method: 'GET',
                                    url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${props.query}&types=geocode&key=AIzaSyC32IGaEn9VO2uG0EDv8F7UmgZ54Cb3H_k`
                                }
                            );
                            console.log('response', response);
                            setSuggestions(response.data.predictions);
                        }catch (e) {
                            console.log(e);
                        }
                    };
                    fetchSuggestions();
                    console.log('fetchSuggestions');
                }catch (e) {
                    console.log(e);
                }
            };
            fetchSuggestions();
            console.log('fetchSuggestions');
        } else {
            setSuggestions([]);
        }
    }, [props.query]);

    return (
        <div className="relative w-full">
            <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none text-black"
                placeholder="Enter a location"
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {suggestions.map((suggestion:any) => (
                        <li
                            key={suggestion.place_id}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => {
                                props.setQuery(suggestion.description);
                                setSuggestions([]);
                            }}
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationAutoSuggest;
