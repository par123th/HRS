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
