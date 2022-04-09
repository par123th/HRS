import React from 'react';
import { Table } from '@nextui-org/react';
import { Navbar } from '../../components';
import './search.css';

const Search = () => {
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
	const rows = [
		{
			key: '1',
			hotel_name: 'Armani Hotel Milano',
			average_score: 9.8,
			hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
		},
		{
			key: '2',
			hotel_name: 'Armani Hotel Milano',
			average_score: 9.1,
			hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
		},
		{
			key: '3',
			hotel_name: 'Armani Hotel Milano',
			average_score: 8.5,
			hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
		},
		{
			key: '4',
			hotel_name: 'Armani Hotel Milano',
			average_score: 8.8,
			hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
		},
		{
			key: '5',
			hotel_name: 'Armani Hotel Milano',
			average_score: 7.5,
			hotel_address: 'Piazza Duca D Aosta 9, Central Station, 20124'
		}
	];
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
