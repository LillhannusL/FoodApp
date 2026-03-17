import type { QuestionType } from '@/types';
export const quizData: QuestionType[] = [
	{
		id: 1,
		question: 'How are you feeling today?',
		buttonStyle:
			'flex flex-col btn-ghost border-none  hover:bg-transparent hover:shadow-none',
		answers: [
			{
				text: 'Drained',
				symbol: '/images/drained.png',
			},
			{
				text: 'Doing Okay',
				symbol: '/images/doingOkay.png',
			},
			{
				text: 'Feeling Good!',
				symbol: '/images/feelingGood.png',
			},
		],
	},
	{
		id: 2,
		question: 'Do you crave anything specific?',
		buttonStyle: 'flex justify-start',
		answers: [
			{
				text: 'Comfort Food',
				symbol: '/images/pizza.png',
			},
			{
				text: 'Something fresh',
				symbol: '/images/salad.png',
			},
			{
				text: 'Fast & Easy',
				symbol: '/images/zap.png',
			},
			{
				text: 'Anything',
				symbol: '/images/cooking-pot.png',
			},
		],
	},
	{
		id: 3,
		question: 'How much time do you want to spend?',
		buttonStyle: '',
		answers: [
			{
				text: '0 - 15 minutes',
				symbol: '/images/clock-3.png',
			},
			{
				text: '20 - 30 minutes',
				symbol: '/images/clock-6.png',
			},
			{
				text: '30 + minutes',
				symbol: '/images/clock-9.png',
			},
		],
	},
];
