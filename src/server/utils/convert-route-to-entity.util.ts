const mapping: Record<string, string> = {
  drivers: 'driver',
  expenses: 'expense',
  organizations: 'organization',
  suppliers: 'supplier',
  tools: 'tool',
  transporters: 'transporter',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
