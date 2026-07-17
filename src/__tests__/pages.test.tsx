import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import Privacy from '@/app/privacy/page';
import Terms from '@/app/terms/page';

describe('Application Pages', () => {
  it('renders the Home page with WTFKit information', () => {
    render(<Home />);
    expect(screen.getAllByText(/WTFKit/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Stop guessing why your/i)).toBeInTheDocument();
    expect(screen.getByText(/terminal broke\./i)).toBeInTheDocument();
    expect(screen.getByText(/What broke\?/i)).toBeInTheDocument();
    expect(screen.getAllByText(/npm install -g wtf/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/WTFKit now supports Gemini AI/i)).toBeInTheDocument();
    
    // Check for correct external links
    const links = screen.getAllByRole('link');
    const githubLink = links.find(link => link.getAttribute('href') === 'https://github.com/TheJ4nitorNG/wtfkit');
    expect(githubLink).toBeInTheDocument();
    
    const websiteRepoLink = links.find(link => link.getAttribute('href') === 'https://github.com/TheJ4nitorNG/wtfkitwebsite');
    expect(websiteRepoLink).toBeInTheDocument();
    
    const orphicNodeLink = links.find(link => link.getAttribute('href') === 'https://orphicnode.com');
    expect(orphicNodeLink).toBeInTheDocument();
  });

  it('renders the Privacy Policy page', () => {
    render(<Privacy />);
    expect(screen.getAllByText(/Privacy Policy/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Information We Collect/i)).toBeInTheDocument();
    expect(screen.getByText(/WTFKit is a local command-line tool/i)).toBeInTheDocument();
  });

  it('renders the Terms of Service page', () => {
    render(<Terms />);
    expect(screen.getAllByText(/Terms of Service/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Use of the Tool/i)).toBeInTheDocument();
    expect(screen.getByText(/By installing and using WTFKit/i)).toBeInTheDocument();
  });
});
