--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Homebrew)
-- Dumped by pg_dump version 14.18 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: otps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.otps (
    id integer NOT NULL,
    email text NOT NULL,
    code text NOT NULL,
    expires_at timestamp without time zone NOT NULL
);


ALTER TABLE public.otps OWNER TO postgres;

--
-- Name: otps_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.otps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.otps_id_seq OWNER TO postgres;

--
-- Name: otps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.otps_id_seq OWNED BY public.otps.id;


--
-- Name: session; Type: TABLE; Schema: public; Owner: bashirmuhammadjibrin
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO bashirmuhammadjibrin;

--
-- Name: transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transactions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    type text NOT NULL,
    amount numeric(12,2) NOT NULL,
    description text NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    created_by text DEFAULT 'SYSTEM'::text NOT NULL
);


ALTER TABLE public.transactions OWNER TO postgres;

--
-- Name: transactions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transactions_id_seq OWNER TO postgres;

--
-- Name: transactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transactions_id_seq OWNED BY public.transactions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    other_name text,
    email text NOT NULL,
    phone text NOT NULL,
    dob date NOT NULL,
    gender text NOT NULL,
    nationality text NOT NULL,
    address text NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    country text NOT NULL,
    zip_code text NOT NULL,
    id_type text NOT NULL,
    id_number text NOT NULL,
    id_expiry_date date NOT NULL,
    id_image_url text,
    selfie_url text,
    account_type text NOT NULL,
    currency text DEFAULT 'USD'::text NOT NULL,
    account_purpose text,
    password text NOT NULL,
    transaction_pin text NOT NULL,
    role text DEFAULT 'USER'::text NOT NULL,
    status text DEFAULT 'PENDING'::text NOT NULL,
     isEmailVerified boolean DEFAULT false NOT NULL,
    account_number character varying(20),
    balance numeric(12,2) DEFAULT 0.00 NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    customer_id character varying(15)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: otps id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.otps ALTER COLUMN id SET DEFAULT nextval('public.otps_id_seq'::regclass);


--
-- Name: transactions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions ALTER COLUMN id SET DEFAULT nextval('public.transactions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: otps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.otps (id, email, code, expires_at) FROM stdin;
\.


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: bashirmuhammadjibrin
--

COPY public.session (sid, sess, expire) FROM stdin;
4mSn2CvJl76RsLcnAW0vXIt-uLt1CP-E	{"cookie":{"originalMaxAge":604800000,"expires":"2026-02-10T11:55:53.062Z","secure":false,"httpOnly":true,"path":"/"},"passport":{"user":1}}	2026-02-10 12:55:54
yi3OOh9nWArG7tMVSO8i_qjG4adBiF3C	{"cookie":{"originalMaxAge":604800000,"expires":"2026-02-10T13:50:04.302Z","secure":false,"httpOnly":true,"path":"/"},"passport":{"user":1}}	2026-02-10 14:50:15
\.


--
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transactions (id, user_id, type, amount, description, created_at, created_by) FROM stdin;
1	3	DEBIT	999.00	sals	2026-02-03 13:03:25.754829	ADMIN
2	2	CREDIT	200.00	sales	2026-02-03 13:04:00.498871	ADMIN
3	2	CREDIT	20000.00	sales	2026-02-03 13:58:09.060528	ADMIN
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, first_name, last_name, other_name, email, phone, dob, gender, nationality, address, city, state, country, zip_code, id_type, id_number, id_expiry_date, id_image_url, selfie_url, account_type, currency, account_purpose, password, transaction_pin, role, status,  isEmailVerified, account_number, balance, created_at, customer_id) FROM stdin;
1	Super	Admin	\N	admin@bank.com	0000000000	2000-01-01	OTHER	US	Bank HQ	New York	NY	US	10001	PASSPORT	ADMIN001	2030-01-01	\N	\N	CHECKING	USD	\N	7f8d53ee8adc367155cad2ef280d1a775e0c6e8fdd80b5c2cbdbde81b2439baf97950c071e56d881e4437ba8ddc228362e789eb595fbd5c9f7bfdd668781b334.7e40eba4531f7c97206fdd0cdf597c25	1234	ADMIN	APPROVED	t	2418344388	1000000.00	2026-02-03 09:47:55.232289	CU9561501578805
3	Test	User	\N	test-creation@example.com	+1234567890	1990-01-01	Male	US	123 Test St	Test City	Test State	USA	12345	Driver License	DL123456789	2030-01-01	\N	\N	SAVINGS	USD	Testing	hashedpassword123	1234	USER	APPROVED	f	2021234567890	-999.00	2026-02-03 11:04:15.330559	CU1234567890123
2	John	Doe	\N	john.doe@example.com	+1987654321	1995-06-15	Male	US	456 User Avenue	Los Angeles	CA	USA	90210	Driver License	DL987654321	2028-06-15	\N	\N	SAVINGS	USD	Personal Banking	100a46ea029d5d58c1626bc5b2b8d16be472e45da994974a380f660442793f33cb76fb617d252f188f85917362c51fefea74138a9da5c499b9f77739d89821e3.a536777b1a71bec67d97ed70ad36070f	5678	USER	APPROVED	t	8285549548	21700.00	2026-02-03 10:01:22.163386	CU4705480090716
4	abubakar	jibrin	b	jibrinb271@gmail.com	09017901953	2013-03-28	Female	Nigerian	jaba	ee	ee	usa	22333	National ID	47837838383838	2026-02-03	\N	\N	CURRENT	USD	hjdjjj	e488734c633d4a611352161537a577828f5f9d14ff3cd23159dbc4383daaad67c615307c77c53aa583d0439394dad494dbc48f8da25a0ec583f97b38e3a87753.5ddb9bd7e320e588860715d94d6cf2f5	1234	USER	APPROVED	t	202505825568	0.00	2026-02-03 14:03:49.213702	CU7326124881018
\.


--
-- Name: otps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.otps_id_seq', 1, true);


--
-- Name: transactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transactions_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: otps otps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.otps
    ADD CONSTRAINT otps_pkey PRIMARY KEY (id);


--
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: bashirmuhammadjibrin
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (id);


--
-- Name: users users_account_number_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_account_number_unique UNIQUE (account_number);


--
-- Name: users users_customer_id_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_customer_id_unique UNIQUE (customer_id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: idx_session_expire; Type: INDEX; Schema: public; Owner: bashirmuhammadjibrin
--

CREATE INDEX idx_session_expire ON public.session USING btree (expire);


--
-- Name: transactions transactions_user_id_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_user_id_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

