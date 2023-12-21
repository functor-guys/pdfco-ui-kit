import './styles.css';

import NxWelcome from './nx-welcome';
import { Button, Card } from '@functor-guys/ui-kit-common';
import { Header } from '@functor-guys/pdfco-ui-kit-elements';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <div style={{ padding: 50 }}>
      <BrowserRouter>
        <div className="">
          <Header onLogout={console.log} me={{}} />
        </div>


        <Button>Test Button</Button>

        <Card $hasBorder>Hello</Card>
      </BrowserRouter>




      {/*<Card>Hello</Card>*/}

      <NxWelcome title="overview" />
    </div>
  );
}

export default App;
