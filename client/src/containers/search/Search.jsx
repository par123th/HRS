import React from 'react';
import { Table } from '@nextui-org/react';
import { Navbar } from '../../components';
import './search.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Search = () => {
	const [rows, setRows] = useState([]);

	useEffect(() => {

	function resultHandler(event) {
		const results = JSON.parse(localStorage.getItem('results'));
		if (results) {
		setRows(results);
		}
	}
	
	window.addEventListener('storage',resultHandler);
	}, []);

	const columns = [
		{
			key: 'hotel_name',
			label: 'Hotel Name'
		},
		{
			key: 'average_score',
			label: 'Average Score'
		},
		{
			key: 'hotel_address',
			label: 'Hotel Address'
		}
	];
<<<<<<< HEAD
	// const rows = [
	// 	{
	// 		key: '1',
	// 		hotel_name: 'Armani Hotel Milano',
	// 		average_score: 9.8,
	// 		hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
	// 	},
	// 	{
	// 		key: '2',
	// 		hotel_name: 'Armani Hotel Milano',
	// 		average_score: 9.1,
	// 		hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
	// 	},
	// 	{
	// 		key: '3',
	// 		hotel_name: 'Armani Hotel Milano',
	// 		average_score: 8.5,
	// 		hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
	// 	},
	// 	{
	// 		key: '4',
	// 		hotel_name: 'Armani Hotel Milano',
	// 		average_score: 8.8,
	// 		hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
	// 	},
	// 	{
	// 		key: '5',
	// 		hotel_name: 'Armani Hotel Milano',
	// 		average_score: 7.5,
	// 		hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
	// 	}
	// ];
=======
	const rows = [
		{
			key: '1',
			hotel_name: 'Excelsior Hotel Gallia Luxury Collection Hotel',
			average_score: 9.4,
			hotel_address: 'Piazza Duca D Aosta 9 Central Station 20124 Mi...'
		},
		{
			key: '2',
			hotel_name: 'Palazzo Parigi Hotel Grand Spa Milano',
			average_score: 9.3,
			hotel_address: 'Corso Di Porta Nuova 1 Milan City Center 20121...'
		},
		{
			key: '3',
			hotel_name: 'Hotel Spadari Al Duomo',
			average_score: 9.3,
			hotel_address: 'Via Spadari 11 Milan City Center 20123 Milan I...'
		},
		{
			key: '4',
			hotel_name: 'Room Mate Giulia',
			average_score: 9.3,
			hotel_address: 'Silvio Pellico 4 Milan City Center 20121 Milan...'
		},
		{
			key: '5',
			hotel_name: 'UNA Maison Milano',
			average_score: 9.3,
			hotel_address: 'Via Mazzini 4 Milan City Center 20123 Milan Italy'
		}
	];

>>>>>>> 4ff2a94ecb5c07d9a4bb810a4ea31d0d18f5cae6
	return (
		<div className="search-page">
			<Navbar />
			<div className="search-results">
				<h1>Search Results</h1>
				<div>
					<Table
						aria-label="Example table with dynamic content"
						selectionMode="single"
						className="table"
						css={{
							height: 'auto',
							minWidth: '100%'
						}}
					>
						<Table.Header columns={columns}>
							{(column) => (
								<Table.Column key={column.key}>
									{column.label}
								</Table.Column>
							)}
						</Table.Header>
						<Table.Body items={rows}>
							{(item) => (
								<Table.Row key={item.key}>
									{(columnKey) => (
										<Table.Cell>
											{item[columnKey]}
										</Table.Cell>
									)}
								</Table.Row>
							)}
						</Table.Body>
					</Table>
				</div>
			</div>
		</div>
		
	);
};

export default Search;
