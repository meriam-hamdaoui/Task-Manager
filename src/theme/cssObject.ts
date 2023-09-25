import { CSSProperties } from 'react';

export const flexColumn: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

export const dashboardSX: CSSProperties = {
  ...flexColumn,
  height: '100vh',
  position: 'fixed',
  right: 0,
  top: 0,
  width: '100%',
  backgroundColor: 'background.paper',
};

const avatarCSS: CSSProperties = {
  width: '96px',
  height: '96px',
  marginBottom: '16px',
};
export const avatarSX: CSSProperties = {
  ...avatarCSS,
  backgroundColor: 'primary.main',
};

export const counterAvatar: CSSProperties = {
  ...avatarCSS,
  border: '5px solid',
  backgroundColor: 'transparent',
};

export const createTaskBox: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  padding: '0 40px',
  margin: '60px 0',
};

export const taskCounterGrid: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '80px',
};

export const taskCardBox: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  marginBottom: '20px',
  padding: '40px',
  width: '100%',
  backgroundColor: 'background.paper',
  borderRadius: '8px',
  border: '1px solid',
};
