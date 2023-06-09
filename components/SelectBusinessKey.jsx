import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { add } from "../features/step/mSlice";

export default function SelectBusinessKey() {
	const [newBusinessKey, setBusinessKey] = useState();

	const dispatch = useDispatch();

	async function handleGo() {

		// const url = `https://cors-anywhere.herokuapp.com/https://dlmoatprd.wdf.sap.corp/flowable-rest/service/runtime/process-instances?businessKey=${newBusinessKey}&sort=startTime&size=1`; // Replace with your target API endpoint

		const url = `https://dlmoatprd.wdf.sap.corp/flowable-rest/service/runtime/process-instances?businessKey=${newBusinessKey}&sort=startTime&size=1`;

		const headers = new Headers();
		headers.append('Authorization', 'Basic ' + btoa(`flowable` + ':' + `flowable`));
		// headers.append('Origin', `https://dlmoatprd.wdf.sap.corp/flowable-rest/service/runtime/process-instances?businessKey=${newBusinessKey}&sort=startTime&size=1`);
		// headers.append('Accept-Encoding', 'gzip, deflate, br');
		// headers.append('Connection', 'keep-alive');
		try {
			const response = await fetch(url, {
				method: 'GET',
				// headers: headers,
				// mode: 'cors',
				// credentials: 'include'
				headers: headers
			});
			console.log(response.ok);
			const m_model = await response.json();
			console.log(m_model);
		} catch (error) {
			console.log(error.message);
		}


		dispatch(add({ key: newBusinessKey }));
	}

	return (
		<div>
			<label>
				Business Key
				<input onChange={(e) => setBusinessKey(e.target.value)} />
			</label>
			<button onClick={handleGo}>GO</button>
		</div>
	);
}
