import React, { useState } from "react";
import { Collapse } from "react-collapse";

import arrow from "../../assets/images/arrow.svg";

import * as Styled from "./__styles__/History.styles";

const History = ({ data, onResultClick }) => {
	const [isOpen, setIsOpen] = useState(false);

	const resolveTableBody = () => {
		if (data.length > 0) {
			return data
				.map(({ operation, result }, index) => (
					<tr key={index}>
						<td>{operation}</td>
						<td className="result" onClick={() => onResultClick(result)}>
							{result}
						</td>
					</tr>
				))
				.reverse();
		} else {
			return (
				<tr>
					<td colSpan={2}>Aucun résultat</td>
				</tr>
			);
		}
	};

	return (
		<>
			<Styled.Root onClick={() => setIsOpen(!isOpen)}>
				<Styled.Arrow src={arrow} isOpen={isOpen} />
				Voir l'historique des opérations
			</Styled.Root>
			<Collapse isOpened={isOpen}>
				<Styled.Table>
					<thead>
						<tr>
							<th>Opération</th>
							<th>Résultat</th>
						</tr>
					</thead>
					<tbody>{resolveTableBody()}</tbody>
				</Styled.Table>
			</Collapse>
		</>
	);
};

export default History;
