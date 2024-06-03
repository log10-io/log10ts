# ChatCompletionNamedToolChoice

Specifies a tool the model should use. Use to force the model to call a specific function.


## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [models.ChatCompletionNamedToolChoiceType](../models/chatcompletionnamedtoolchoicetype.md)         | :heavy_check_mark:                                                                                 | The type of the tool. Currently, only `function` is supported.                                     |
| `function`                                                                                         | [models.ChatCompletionNamedToolChoiceFunction](../models/chatcompletionnamedtoolchoicefunction.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |