'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

export default function NavigationBar() {
	const pathname = usePathname();
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [currentPath, setCurrentPath] = useState(pathname);

	useEffect(() => {
		const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);
		return () => window.removeEventListener('resize', checkIfMobile);
	}, []);

	const handleNavigation = (path: string) => {
		setCurrentPath(path);
		setTimeout(() => {
			router.push(path);
		}, 300);
	};

    const link = {
        linkedin: 'https://www.linkedin.com/in/dylanbackes/',
        resume: 'https://drive.google.com/file/d/1pTNYEs-n9ItmKb7zdPGaqmZCyEM2dsf6/view?usp=sharing'
    }

	return (
		<nav className='fixed inset-x-0 top-0 z-10 bg-gradient-to-b from-[#0006] to-[#0000] h-[168px] pt-6 px-4 md:px-12 2xl:pt-8 flex'>
			<div className='flex justify-between max-md:justify-start items-center h-14 w-full'>
				<div className='flex items-center space-x-3 flex-1'>
					<Image
						src='/logos/logo-nbg.png'
						alt='Logo'
						className='h-12 w-auto'
						width={50}
						height={50}
					/>
					<div className='flex flex-col justify-center mt-[1px] space-y-2'>
						<h1 className='text-xl font-medium leading-5 text-white'>Rae</h1>
						<p className='text-[#f2f2f280] text-xs leading-3'>
							Software Developer
						</p>
					</div>
				</div>

				<div className='relative'>
					<motion.div
						className='absolute z-[1] top-[5px] left-[5px] w-[90px] h-[36px] bg-white bg-opacity-10 rounded-full'
						initial={false}
						animate={{ x: currentPath === '/info' ? 90 : 0 }}
						transition={{ type: 'spring', stiffness: 400, damping: 30 }}
					/>
					<motion.div
						className='absolute z-[0] top-[-2px] left-0 h-[4px] w-[24px] ml-[35px] rounded-[2px] bg-white shadow-nav'
						initial={false}
						animate={{
							x: currentPath === '/info' ? 90 : 0,
						}}
						transition={{ type: 'spring', stiffness: 400, damping: 50 }}
					/>
					<div className='relative z-[2] flex bg-[#f2f2f20d] border border-[#f2f2f21a] rounded-full p-1 backdrop-blur-[15px]'>
						<button
							onClick={() => handleNavigation('/')}
							className={`relative z-[2] flex items-center justify-center w-[90px] h-9 text-sm font-medium rounded-[18px] hover:bg-gradient-to-l from-[#0000] to-[#f2f2f20d] ${
								currentPath === '/'
									? 'text-white'
									: 'text-white text-opacity-60'
							}`}
						>
							Work
						</button>
						<button
							onClick={() => handleNavigation('/info')}
							className={`relative z-[2] flex items-center justify-center w-[90px] h-9 text-sm font-medium rounded-[18px] hover:bg-gradient-to-r from-[#0000] to-[#f2f2f20d] ${
								currentPath === '/info'
									? 'text-white'
									: 'text-white text-opacity-60'
							}`}
						>
							Info
						</button>
					</div>
				</div>

				<div className='flex items-center space-x-4 md:flex-1 justify-end'>
					{!isMobile && (
						<>
							<a
								href={link.linkedin}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center space-x-2 text-white max-md:hidden hover:bg-[#f2f2f20d] rounded-[24px] h-12 pl-4 pr-3'
							>
								<span className='text-sm font-medium tracking-[.2px]'>LinkedIn</span>
								<Image
									src='icon-external.svg'
									alt='LinkedIn Icon'
									width={18}
									height={18}
								/>
							</a>
							<a
								href={link.resume}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center space-x-2 text-white max-md:hidden hover:bg-[#f2f2f20d] rounded-[24px] h-12 pl-4 pr-3'
							>
								<span className='text-sm font-medium tracking-[.2px]'>Resume</span>
								<Image
									src='icon-external.svg'
									alt='Resume Icon'
									width={18}
									height={18}
								/>
							</a>
						</>
					)}
					{isMobile && (
						<div className='relative'>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className='flex items-center justify-center h-12 w-12 rounded-full bg-[#1c1c1c] border border-[#f2f2f21a] ml-3'
							>
								<Image
									src={
										isMenuOpen
											? 'icon-close.svg'
											: 'icon-@.svg'
									}
									alt={isMenuOpen ? 'Close Icon' : 'Menu Icon'}
									width={24}
									height={24}
								/>
							</button>
							<AnimatePresence>
								{isMenuOpen && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.2 }}
										className="absolute right-0 mt-2 w-48 bg-[#1c1c1c] backdrop-blur-[20px] bg-[#f2f2f20d] border border-[#f2f2f21a] rounded-[16px] shadow-lg p-3 space-y-1"
									>
										<a
											href={link.linkedin}
											target='_blank'
											rel='noopener noreferrer'
											className='px-4 py-3 text-sm text-white hover:bg-[#2c2c2c] flex items-center justify-between rounded-[10px]'
										>
											LinkedIn
											<Image
												src='icon-external.svg'
												alt='External Link'
												width={16}
												height={16}
											/>
										</a>
										<a
											href={link.resume}
											target='_blank'
											rel='noopener noreferrer'
											className='px-4 py-3 text-sm text-white hover:bg-[#2c2c2c] flex items-center justify-between rounded-[10px]'
										>
											Resume
											<Image
												src='icon-external.svg'
												alt='External Link'
												width={16}
												height={16}
											/>
										</a>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
