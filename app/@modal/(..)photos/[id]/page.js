'use client';

import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';

import Photo from '../../../../components/frame';
import Modal from '../../../../components/modal';
import swagPhotos from '../../../../photos';

export default function PhotoModal({ params: { id: photoId } }) {
	const photos = swagPhotos;
	const photo = photoId && photos.find(p => p.id === photoId);
	const segment = useSelectedLayoutSegment();
	const segments = useSelectedLayoutSegments();
	console.log('segment: ', segment);
	console.log('segments: ', segments);
	return (
		<Modal>
			<Photo photo={photo} />
		</Modal>
	);
}
