import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to CSV Editor</h1>
        <p className="mb-6">Edit your CSV files with ease.</p>
        <Link to="/csv-editor">
          <Button>
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Go to CSV Editor
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
