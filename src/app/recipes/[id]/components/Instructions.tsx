interface InstructionStep {
	number: number;
	step: string;
	equipment?: { name: string }[];
}

interface InstructionsProps {
	instructions: {
		steps: InstructionStep[];
	}[];
}

export default function Instructions({ instructions }: InstructionsProps) {
	if (!instructions || instructions.length === 0) {
		return (
			<p className="text-gray-500 italic">Inga instruktioner tillgängliga.</p>
		);
	}

	// Vi tar de flesta recepten från första instruktions-setet
	const allSteps = instructions[0].steps;

	return (
		<div className="space-y-6">
			<h2 className="text-3xl font-bold">Gör så här</h2>

			<div className="grid gap-6">
				{allSteps.map((step) => (
					<div key={step.number} className="flex gap-4">
						{/* Cirkel med siffra */}
						<div className="flex-none">
							<div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shadow-sm">
								{step.number}
							</div>
						</div>

						{/* Själva texten */}
						<div className="flex-1 pt-1">
							<p className="">{step.step}</p>

							{/* Om det finns utrustning, visa små diskreta taggar */}
							{/* {step.equipment && step.equipment.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-4">
									{step.equipment.map((item, index) => (
										<span key={index} className="badge badge-outline">
											{item.name}
										</span>
									))}
								</div>
							)} */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
