import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { CTASection, Company, Features, FooterSection, Hero, Testimonials } from './sections';
import Profile from './sections/Profile';

export default function App() {
  return (
    <main className="font-baseFont">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar/>
                <section className='bg-skin-fill-primary pt-20'>
                  <Hero/>
                  <Company/>
                  <Features/>
                  <Testimonials/>
                  <CTASection/>
                  <Profile/>
                  <FooterSection/>
                </section>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}