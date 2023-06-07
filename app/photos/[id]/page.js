'use client';
import React from 'react';
import Photo from '../../../components/frame';
import swagPhotos from '../../../photos';
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';

export default function PhotoPage({ params: { id } }) {
	const photo = swagPhotos.find(p => p.id === id);
	const segment = useSelectedLayoutSegment();
	const segments = useSelectedLayoutSegments();
	console.log('segment: ', segment);
	console.log('segments: ', segments);

	return (
		<div className="container mx-auto my-10">
			<div className="w-1/2 mx-auto border border-gray-700">
				<Photo photo={photo} />
			</div>
		</div>
	);
}
