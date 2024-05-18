"use client"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import SectionWrapper from './section-wrapper';

const AllocationFileUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'application/vnd.ms-excel': ['.xls'],
        },
        onDrop: (acceptedFiles) => {
            setSelectedFile(acceptedFiles[0]);
        },
    });

    return (
        <SectionWrapper className='bg-gray-100 pb-14 pt-8'>
            <div className="w-full lg:w-4/5">
                <h2 className="text-3xl font-semibold text-gray-800">Allocation</h2>
                <p className="text-gray-600 mt-2 mb-6">
                    Experience seamless vehicle management with our intuitive online Vehicle Allocator. Perfect for coordinating buses, shuttles, and VIP services, this tool simplifies reservations, saves time, and guarantees reliable transfers for all your transportation needs.
                </p>
            </div>
            <div className="bg-cyan-600 p-2 rounded-lg">
                <div
                    {...getRootProps()}
                    className={`flex flex-col items-center justify-center border-[1px] border-spacing-24 border-dashed border-white-500 rounded-lg py-8 bg-cyan-700  text-white ${isDragActive ? 'bg-cyan-800 animate-pulse' : ''}`}
                >
                    <input {...getInputProps()} />
                    {!selectedFile && (
                        <div className="flex flex-col justify-center items-center px-2 text-center">
                            <Image src={"/images/file-upload-icon.png"} width={42} height={42} alt='file upload icon' />
                            <p className="mt-2">Drag & Drop File Here</p>
                            <p className="text-sm mt-1 ">Select excel file with minimum size 32kb</p>
                        </div>
                    )}
                    {selectedFile && (
                        <div className="flex flex-col justify-center items-center">
                            <Image src={"/images/file-upload-icon.png"} width={42} height={42} alt='file upload icon' />
                            {selectedFile.name && (
                                <div className="flex items-center mt-5">
                                    <FileIcon file={selectedFile} />
                                    <p className="ml-2">{selectedFile.name}</p>
                                </div>
                            )}
                        </div>
                    )}
                    <button className="mt-6 px-4 md:px-12 py-2 bg-white text-gray-900 font-semibold rounded">
                        Choose File
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
};

const FileIcon = ({ file }: { file: File }) => {
    const fileExtension = getFileExtension(file.name);
    const icon = determineIcon(fileExtension);
    return <Image src={icon} width={24} height={24} alt={fileExtension} />;
};

const getFileExtension = (filename: string) => {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
};

const determineIcon = (fileExtension: string) => {
    switch (fileExtension.toLowerCase()) {
        case 'xls':
        case 'xlsx':
            return '/images/excel-icon.png';
        default:
            return '/images/excel-icon.png';
    }
};

export default AllocationFileUpload;
