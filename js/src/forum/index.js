import {extend, override} from 'flarum/extend';
import app from 'flarum/app';
import components from './components';
import HowToUseModal from './components/HowToUseModal';

app.initializers.add('migratetoflarum-learn', () => {
    ['forum', 'admin'].forEach(stack => {
        Object.keys(components[stack]).forEach(className => {
            override(flarum.core.compat['components/' + className].prototype, 'view', function (original) {
                return m('.MTFLearnWrap.MTFLearnClass', [
                    m('.MTFLearnWrapLabel', {
                        onclick() {
                            app.modal.show(new HowToUseModal({
                                className,
                                methodName: 'view',
                                methodType: 'view',
                            }));
                        },
                    }, className + '.view'),
                    m('.MTFLearnWrapView', original()),
                ]);
            });

            Object.keys(components[stack][className]).forEach(methodName => {
                if (methodName === 'view') {
                    return;
                }

                const methodType = components[stack][className][methodName];

                if (methodType === 'view') {
                    override(flarum.core.compat['components/' + className].prototype, methodName, function (original) {
                        return m('.MTFLearnWrap' + (methodName === 'view' ? '.MTFLearnClass' : '.MTFLearnMethod'), [
                            m('.MTFLearnWrapLabel', {
                                onclick() {
                                    app.modal.show(new HowToUseModal({
                                        className,
                                        methodName,
                                        methodType,
                                    }));
                                },
                            }, className + '.' + methodName),
                            m('.MTFLearnWrapView', original()),
                        ]);
                    });
                } else if (methodType === 'ItemList') {
                    extend(flarum.core.compat['components/' + className].prototype, methodName, function (items) {
                        ['start', 'end'].forEach(place => {
                            items.add('mtf-' + place, m('.MTFLearnListItem', {
                                onclick() {
                                    app.modal.show(new HowToUseModal({
                                        className,
                                        methodName,
                                        methodType,
                                    }));
                                },
                            }, className + '.' + methodName), place === 'start' ? 1000 : -1000);
                        });
                    });
                }
            });
        });
    });
});
