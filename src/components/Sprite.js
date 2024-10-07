import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import DogSprite1 from '../sprites/DogSprite1';
import DogSprite from '../sprites/DogSprite';
import DogSprite2 from '../sprites/DogSprite2';
import { selectSprite } from '../redux/spritesSlice';
import { SPRITE_HEIGHT, SPRITE_WIDTH } from '../constants/sprites';

export const SpriteImage = ({ spriteName, styles, handleClick }) => {
    switch (spriteName) {
        case "dog":
            return <DogSprite styles={styles} onClick={handleClick} />
        case "dog1":
            return <DogSprite1 styles={styles} onClick={handleClick} />
        case "dog2":
            return <DogSprite2 styles={styles} onClick={handleClick} />
        default:
            return <></>
    }
}
const Sprite = ({ sprite, containerSize, onDragStart, onDrag }) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(selectSprite(sprite.id));
    };

    const { left, top } = useMemo(() => {
        const centerX = containerSize.width / 2;
        const centerY = containerSize.height / 2;

        const spriteX = centerX + sprite.position.x - SPRITE_WIDTH / 2;
        const spriteY = centerY - sprite.position.y - SPRITE_HEIGHT / 2;

        return {
            left: spriteX,
            top: spriteY
        };
    }, [containerSize, sprite.position.x, sprite.position.y]);

    const handleDragStart = (e) => {
        onDragStart(sprite.id);
    };

    return (
        <div
            className="absolute transition-transform duration-400"
            style={{
                transform: `translate(${left}px, ${top}px) rotate(${sprite.rotation}deg)`,
            }}
            draggable="true"
            onDragStart={handleDragStart}
            onDrag={onDrag}
        >
            <SpriteImage spriteName={sprite.name} handleClick={handleClick} styles={{ width: SPRITE_WIDTH + "px", height: SPRITE_HEIGHT + "px" }} />
        </div>
    );
};

export default Sprite;
