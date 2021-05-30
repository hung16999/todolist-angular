import { v4 } from 'uuid';
export interface Task {
  id: string;
  name: string;
  done: boolean;
}

export const listTask: Task[] = [
  { id: v4(), name: 'sleep', done: false },
  { id: v4(), name: 'breakfast', done: true },
  { id: v4(), name: 'uong ruou', done: false },
  { id: v4(), name: 'nau com', done: true },
  { id: v4(), name: 'nau com', done: true },
];
