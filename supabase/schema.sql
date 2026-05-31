-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT,
  email TEXT,
  linkedin_url TEXT,
  project TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  feedback TEXT NOT NULL CHECK (char_length(feedback) >= 30 AND char_length(feedback) <= 1000),
  permission_to_publish BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  featured BOOLEAN NOT NULL DEFAULT false,
  admin_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  approved_at TIMESTAMPTZ
);

-- Indexes
CREATE INDEX idx_reviews_status ON reviews(status);
CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);

-- RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Public can only read approved reviews
CREATE POLICY "Public read approved" ON reviews
  FOR SELECT USING (status = 'approved' AND permission_to_publish = true);

-- Public can insert (submit review)
CREATE POLICY "Public insert" ON reviews
  FOR INSERT WITH CHECK (true);
