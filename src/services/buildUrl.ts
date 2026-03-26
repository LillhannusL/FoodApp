export const buildURL = (answers: any) => {
	const params = new URLSearchParams();

	// 0: Course, 1: Diet, 2: Craving, 3: Energy

	const course = answers[0];
	const diet = answers[1];
	const craving = answers[2];
	const energy = answers[3];

	const queryParts: string[] = [];

	// CRAVING
	if (craving === 'hearty') {
		queryParts.push(energy === 'low' ? 'pasta' : 'casserole');
	} else if (craving === 'fresh') {
		queryParts.push('salad', 'bowl');
	} else if (craving === 'spicy') {
		queryParts.push('chili');
	} else if (craving === 'surprise') {
	}

	// FEELING
	if (energy === 'low') {
		params.append('maxReadyTime', '20');
	} else if (energy === 'medium') {
		params.append('maxReadyTime', '40');
	}

	// COURSE
	if (course && course !== 'all') {
		const courseType = course === 'main' ? 'main course' : course;
		params.append('type', courseType);
	}

	// DIET & INTOLERANCES
	if (diet && diet.trim() !== '') {
		if (diet === 'glutenFree') {
			params.append('intolerances', 'gluten');
		} else {
			params.append('diet', diet);
		}
	}

	// QUERY
	const finalQuery = queryParts.slice(0, 3).join(' ');
	if (finalQuery) {
		params.append('query', finalQuery);
	}

	params.append('sort', 'popularity');
	params.append('number', '10');
	params.append('addRecipeInformation', 'true');

	const finalUrl = params.toString();

	return finalUrl;
};
