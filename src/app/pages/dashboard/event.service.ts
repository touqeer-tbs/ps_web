import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface EventSummary {
  id: string;
  name: string;
  city: string;
  venue: string;
  category: string;
  status: string;
  startDate: string;
  endDate: string;
  attendees: number;
  budget: number;
  coverUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(status: string): Observable<EventSummary[]> {
    return this.http.get<EventSummary[]>(`/api/events?status=${status}`);
  }
}
