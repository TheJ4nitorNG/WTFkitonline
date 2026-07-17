import '@testing-library/jest-dom';
import React from 'react';

jest.mock('lucide-react', () => ({
  Globe: () => React.createElement('div', { 'data-testid': 'icon-globe' }),
  Terminal: () => React.createElement('div', { 'data-testid': 'icon-terminal' }),
  Shield: () => React.createElement('div', { 'data-testid': 'icon-shield' }),
  FileText: () => React.createElement('div', { 'data-testid': 'icon-filetext' }),
  Code2: () => React.createElement('div', { 'data-testid': 'icon-code2' }),
}));