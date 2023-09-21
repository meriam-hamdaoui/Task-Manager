import { CSSProperties } from 'react';

export const dashboardSX: CSSProperties = {
  height: '100vh',
  position: 'fixed',
  right: 0,
  top: 0,
  width: '100%',
  backgroundColor: 'background.paper',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

export const avatarSX: CSSProperties = {
  width: '96px',
  height: '96px',
  backgroundColor: 'primary.main',
  marginBottom: '16px',
};

export const createTaskBox: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  padding: '0 4px',
  margin: '6px 0',
};
