interface InstructionStep {
	number: number;
	step: string;
	equipment?: { name: string }[];
}

interface InstructionsProps {
	instructions?: {
		steps: InstructionStep[];
	}[];
}

export default function Instructions({ instructions }: InstructionsProps) {
	if (!instructions || instructions.length === 0) {
		return (
			<p className="text-gray-500 italic">Inga instruktioner tillgängliga.</p>
		);
	}

	const allSteps = instructions[0].steps;
	const formatStep = (text: string) => {
		return text.replace(/([.!?,])(?=[A-ZÅÄÖ])/g, '$1 ');
	};

	return (
		<div className="space-y-6">
			<h2 className="text-3xl font-bold">Instructions</h2>

			<div className="grid gap-6">
				{allSteps.map((step) => (
					<div key={step.number} className="flex gap-4">
						<div className="flex-none">
							<div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-sm">
								{step.number}
							</div>
						</div>

						<div className="flex-1 pt-1">
							<p className="leading-relaxed tracking-wide max-w-prose">
								{formatStep(step.step)}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
