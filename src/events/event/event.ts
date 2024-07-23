import { EventFunction } from "./types/event-function";

export class Event<T> {
  private listeners = new Set<EventFunction<T>>();

  on(listener: EventFunction<T>) {
    this.listeners.add(listener)
  }

  off(listener: EventFunction<T>) {
    this.listeners.delete(listener);
  }

  emit(value: T) {
    this.listeners.forEach((listener) => listener(value));
  }
}