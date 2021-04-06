import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

/*
TODD:
1. Create and style flights component
2. Create booking page https://www.kiwi.com/uk/booking?activeStep=0&affilid=aviasalesredirect_ua&currency=uah&deeplinkId=28446551464&flightsId=18ba23b0492d0000641c377a_0-23b0091e492e000033a59e50_0-091e1db8492f0000d71a875a_0&handBags=null&holdBags=null&insurance=0&lang=uk&passengers=1&price=74.55&session_identifier=YbBk9Zoa8kzQyPJPaEDvG3sjux21iu3AUTyyPMFccNhoI1AHHAO8QdIGEEEFYPLl&session_token=9PbYuKC1KxrF2DndCauteOm5XwORMITlzOg3v9VAmwvohE3WVZTXQDgap4a4ExGrCjI9L2Bdh%2BJhHN%2BRIYlZ59%2FCoYyEVTqjj9k5HzLJPaKk0SB8Pw0Xgzo%2BLFPTm8f6MxBG1fRISIZua9lgACw95cy6nWI4pacGX0NPrIf5ludRb3KxyQhX4xEGu0VvQyUECy93F0Aut8TdwRQdDiBLnBmMhJiO0mmJzdv2yX%2Fj9nyKdpnOyEBsjV5nH4yMVav1xEcqhxOu049N99icKCc%2BpNIFhhz%2FT4pWSL%2Bx4U3T57M%3D&sub1=f6812y0syog0&token=Bulre0LjRq13dJ1gama-Iu2nlRmhrgd5W3Q5jSuokYwopVNqfT8U9-DSm6ZqMgCO-kNZSBOUIOKcy80FTiW-WqtHYXvxYSqbCCoEqeEfp0kelBosJceAemkRimKC6yDdghSROD6Fn8JR86fQvZbdTPjHGhFFsgoMxt3QhMoICkpGejSRn7ih_Z-MB1NTVYqg35IuyRQjRd56lV6kUw99kkzsILPdMyBCIrfEh_py3Wdg5iMUXYR-sEQSMxcRVWsSnIq3raHCX031srGL5jH7DHFpBJsB_r9zw-TlCmS3pCxBMPvc1O2t2h0Il8uU-pLKfg1VEP8GvG-rFgF846SfIhxpWhJEsbLb-RsikXwxbaffODq_zdVxs3Czg-pZmJcgTxnNoC_vnDzucU33gcxYOUVgF2D36u5jxegiNKrLsR99ah43CklzsNKhXaxgmQCMSf_61MW8wzfhTK25WfF8ZttvsD8CwlejS7mI90qWQyMjlYNzs9q6H9wNd1rXBPfZmMgqsCAnqFN2I0yQE7UT1VCDfNoXah8v7cLe1s_ronH1INawkI_pMJwD4yxZ4a-szcY2juuFKBV3r-s1tabvyktqIHnNRfqNvrwiFXjVh3UMpmebqPb2EBAaNqfNHMqDNGEusmB9JV508Hug7BWbhXMiubxAKbKMUXUDx7z9K21cD06yeiI39KgrT5E4hZpFL7uM3B01Ml1WQq8nzv05Upd6jkDtIFAfUiU6GujK2igQvgvILAhZ6AwOgjPCZu9GUVyl9a-FtIXPqGfVEL9ji6JxVS365iXnQDgKp8EnpCGi2b1jK_vLW7jKRIED4VSsm41LYTe7sh2v11ohirh5SZEZpP5bZj14JMyUakH7HLyI%3D&user_id=ec8ba9fb-2e0b-440d-8ecf-5ec4fc73a5e5
3. Make breadcrumbs for booking page
4. Create booking form
*/

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
