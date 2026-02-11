-- Run this SQL in your Supabase Dashboard > SQL Editor

-- Hotels table
create table hotels (
  id bigint generated always as identity primary key,
  name text not null,
  location text not null,
  price numeric not null,
  rating numeric default 0,
  image text,
  description text,
  created_at timestamptz default now()
);

-- Bookings table
create table bookings (
  id bigint generated always as identity primary key,
  hotel_id bigint references hotels(id),
  hotel_name text not null,
  guest_name text not null,
  email text not null,
  check_in date not null,
  check_out date not null,
  guests integer default 1,
  created_at timestamptz default now()
);

-- Threads table
create table threads (
  id bigint generated always as identity primary key,
  title text not null,
  author text not null,
  content text not null,
  replies_count integer default 0,
  created_at timestamptz default now()
);

-- Replies table
create table replies (
  id bigint generated always as identity primary key,
  thread_id bigint references threads(id) on delete cascade,
  author text not null,
  content text not null,
  created_at timestamptz default now()
);

-- Enable RLS (Row Level Security) - allow all for demo
alter table hotels enable row level security;
alter table bookings enable row level security;
alter table threads enable row level security;
alter table replies enable row level security;

create policy "Public read hotels" on hotels for select using (true);
create policy "Public read bookings" on bookings for select using (true);
create policy "Public insert bookings" on bookings for insert with check (true);
create policy "Public read threads" on threads for select using (true);
create policy "Public insert threads" on threads for insert with check (true);
create policy "Public read replies" on replies for select using (true);
create policy "Public insert replies" on replies for insert with check (true);

-- Insert sample ls
insert into hotels (name, location, price, rating, image, description) values
  ('Blue Sky Hotel', 'Ulaanbaatar', 120, 4.5, 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop', 'Modern hotel in the heart of the city'),
  ('Gobi Lodge', 'Dalanzadgad', 85, 4.2, 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop', 'Experience the beauty of the Gobi desert'),
  ('Terelj Resort', 'Terelj', 150, 4.8, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop', 'Luxury resort surrounded by nature'),
  ('Khuvsgul Lake Hotel', 'Khatgal', 95, 4.3, 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop', 'Peaceful stay by the pristine lake'),
  ('Steppe Inn', 'Kharkhorin', 70, 4.0, 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&h=400&fit=crop', 'Affordable comfort near ancient ruins'),
  ('Eagle Nest Hotel', 'Olgii', 110, 4.6, 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop', 'Mountain views and Kazakh hospitality');
