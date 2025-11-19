// data/eventData.ts

export const eventData = {
    header: {
      title: 'RainFocus Summit',
      date: 'December 15th',
      location: 'Lehi, Utah',
    },
    guide: {
      title: 'Event setup guide',
      subtitle: 'See the available list of modules below. We suggest that you start with the attendee module.',
      moduleTitle: 'Attendee',
    },
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: 'Base settings.',
        description: 'Configure the basic settings for attendee management',
        type: 'settings',
        cards: [
          {
            id: 'general',
            title: 'General',
            description: 'Define Attendee types & attributes',
          },
          {
            id: 'custom-fields',
            title: 'Title',
            description:
              'Description that explains the value goes here. Description that explains the value goes here.',
          },
          {
            id: 'validation',
            title: 'Title',
            description:
              'Description that explains the value goes here. Description that explains the value goes here.',
          },
        ],
      },
      {
        id: 2,
        stepNumber: 2,
        title: 'Build registration workflows.',
        description: 'Create and manage registration workflows for your attendees',
        type: 'workflows',
        cards: [
          {
            id: 'workflow-1',
            title: 'Attendee Registration',
            description: 'Start by creating a general registration workflow',
            icon: 'registration',
          },
          {
            id: 'workflow-2',
            title: 'Attendee Registration',
            description: 'Start by creating a general registration workflow',
            icon: 'registration',
          },
          {
            id: 'workflow-3',
            title: 'Attendee Registration',
            description: 'Start by creating a general registration workflow',
            icon: 'registration',
          },
        ],
        addButtonText: 'Add Registration Workflow',
        addButtonDescription: 'Create a new registration workflow',
      },
      {
        id: 3,
        stepNumber: 3,
        title: 'Design post-registration experiences.',
        description: 'Set up the attendee portal and post-registration experience',
        type: 'portal',
        cards: [
          {
            id: 'portal',
            title: 'Attendee Portal',
            description:
              "Manage the portal that attendees will see after they've register for your event.",
            icon: 'portal',
          },
        ],
      },
    ],
  };