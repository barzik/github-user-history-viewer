import { render, screen } from '@testing-library/react';
import List from './List';

const reposMockData = [
  {name: 'mockName', created_at: 1344444, description: 'mockDescription', html_url: 'http://mock-url'},
  {name: 'mockName2', created_at: 444444, description: 'mockDescription2', html_url: 'http://mock-url2'},
]

test('renders List', () => {

  render(<List repos={reposMockData} />);
  const NameElement = screen.getAllByText(/mockName/i);
  expect(NameElement).toBeTruthy();
});
