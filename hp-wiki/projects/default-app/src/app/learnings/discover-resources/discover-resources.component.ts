import { Component, resource, signal } from '@angular/core';

@Component({
  selector: 'sig-discover-resources',
  imports: [],
  templateUrl: './discover-resources.component.html',
  styleUrl: './discover-resources.component.css'
})
export class DiscoverResourcesComponent {
  nameQuery = signal('')

  peopleResource = resource({
    defaultValue: undefined,
    request: () => ({ query: this.nameQuery() }),
    loader: async (search) => {
      const response = await fetch('https://swapi.dev/api/people?name=' + search.request.query)
      return await response.json() as { results: {name: string}[]}
    }
  })
}
