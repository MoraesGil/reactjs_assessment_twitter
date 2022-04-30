import React from 'react';
import Feed from './index';
import { render, waitFor } from '@testing-library/react';
import { LoadTweetListSpy } from '@/domain/usecases/mocks';

const makeSut = () => {
    const loadTweetListSpy = new LoadTweetListSpy();

    const container = render(<Feed loadTweetList={loadTweetListSpy} />);
    return {
        container,
        loadTweetListSpy,
    };
};

describe('FeedComponent', () => {
    test('Should call LoadTweetList and mount at least one Tweet', async () => {
        const { loadTweetListSpy, container } = makeSut();

        const tweetList = await container.findAllByRole('post');
        await waitFor(() => tweetList);

        expect(tweetList.length).toBeGreaterThanOrEqual(1);
        expect(loadTweetListSpy.callsCount).toBe(1);
    });
});
