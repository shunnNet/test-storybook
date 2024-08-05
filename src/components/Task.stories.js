import { fn } from '@storybook/test'
import Task from './Task.vue'

export const ActionData = {
  onPinTask: fn(),
  onArchiveTask: fn()
}

export default {
  component: Task,
  title: 'Task',
  tag: ['autodocs'],

  excludeStories: /.*Data$/,
  args: {
    ...ActionData
  }
}

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}
