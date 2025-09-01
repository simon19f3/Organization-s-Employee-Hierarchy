"use client";
import { useSelector, useDispatch } from 'react-redux';
import { deleteB, deleTwo } from '@/redux/slices/employees';
import { profileName } from '@/redux/slices/profileHandler';

// Define interface for NameV prop
interface NameV {
  name: string;
  parent: string | null;
}

// Define interface for Employee (matches employees.ts and profile.tsx)
interface Employee {
  name: string;
  parent: string | null;
  image: string;
  description: string;
  children: Employee[];
}

// Define interface for Redux state
interface RootState {
  employees: Employee[];
  profile: string;
}

function DeleteButton({ NameV, className }: { NameV: NameV; className?: string }) {
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employees);

  const handleDelete = (employeeName: string) => {
    dispatch(deleTwo(employeeName));
    dispatch(deleteB(employeeName));
    // Navigate to parent profile or fallback to first available employee
    const nextProfile = NameV.parent !== null ? NameV.parent : employees[1]?.name ?? '';
    dispatch(profileName(nextProfile));
  };

  return (
    <div>
      <button
        onClick={() => handleDelete(NameV.name)}
        className={className || "px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-red-600 to-red-700 rounded-md hover:from-red-700 hover:to-red-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-200 ease-in-out shadow-sm"}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;