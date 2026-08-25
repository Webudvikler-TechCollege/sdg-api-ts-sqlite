export const fieldTypes: Record<string, Record<string, 'string' | 'number' | 'boolean' | 'date'>> = {
  user: {
    id: 'number',
    firstname: 'string',
    lastname: 'string',
    email: 'string',
    password: 'string',
    description: 'string',
    image: 'string',
    refreshToken: 'string',
    isActive: 'boolean'
  },
  goal: {
    id: 'number',
    title: 'string',
    byline: 'string',
    description: 'string',
    color: 'string',
    icon: 'string',
    video_url: 'string',
    image_url: 'string'
  },
  context: {
    id: 'number',
    title: 'string',
    context: 'string',
    image: 'string'
  },
  target: {
    id: 'number',
    goal_id: 'number',
    sort_number: 'number',
    title: 'string',
    description: 'string'
  },
  education: {
    id: 'number',
    name: 'string',
    color: 'string'
  },
  comments: {
    id: 'number',
    title: 'string',
    comment: 'string',
    user_id: 'number',
    goal_id: 'number',
    created: 'date',
    active: 'boolean'
  },
};