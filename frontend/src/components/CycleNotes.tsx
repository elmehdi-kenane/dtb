import { useEffect, useCallback, useContext } from 'react';
import { AuthContext } from '../utils/useAuth';
import { useDebounce } from '../utils/useDebounce';
import { updateCycleNotes } from '../services/cycle';

const NotesContainer = ({
	cycleId,
	notes,
	setNotes,
}: {
	cycleId: string;
	notes: string | null;
	setNotes: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
	const debouncedNotes = useDebounce(notes!, 500);
	const { user } = useContext(AuthContext)!;

	useEffect(() => {
		if (debouncedNotes !== null) {
			updateCycleNotes(user?.token!, cycleId, debouncedNotes as string);
		}
	}, [debouncedNotes]);

	const handleNotesChange = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			e.preventDefault();
			setNotes(e.target.value);
		},
		[],
	);

	return (
		<textarea
			className="placeholder-tertiary  mt-2 w-[80%] h-[85%] bg-secondary border border-tertiary rounded p-4 text-primary-content font-semibold resize-none focus:outline-none focus:ring-4 focus:ring-tertiary transition-all"
			spellCheck="false"
			value={notes || ''}
			placeholder="Add important things you wish to not forget during this cycle"
			onChange={handleNotesChange}
		></textarea>
	);
};

export default NotesContainer;
