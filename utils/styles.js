import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // boxShadow: '1px 1px 2px',
  },
  section: {
    marginTop: '1em',
    marginBottom: '2em',
    textAlign: 'center',
    width: '100%',
  },
  paper: {
    width: '100%',
    padding: '2em 1em',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    flexGrow: 1,
    marginLeft: '3em',
    // border: '1px solid red',
    textAlign: 'center',
  },
  paragraph: {
    lineHeight: '1.9em',
    marginTop: '2em',
    width: '80%',
    fontSize: '1.6em',
    marginInline: 'auto',
    textAlign: 'justify',
  },
  //   icons: { border: '1px solid red', textAlign: 'right' },
  appBar: {
    color: '#E06806',
    backgroundColor: 'rgba(32, 31, 31,0.9)',
    fontSize: '1em',
  },
}));
