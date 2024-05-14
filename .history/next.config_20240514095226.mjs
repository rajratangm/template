/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remote
    }
    experimental:{
        serverActions:{
            bodySizeLimit:'20mb'
        }

    }
 
};

export default nextConfig;
